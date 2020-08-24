import React, { FC, useEffect } from 'react';
import { Create, useRefresh, useRedirect } from 'react-admin';

interface PromptProps {
    label: string;
    record?: any;
    save?: (data) => {};
}

const Prompt: FC<PromptProps> = ({ save = () => undefined, record = {} }) => {
    useEffect(() => {
        const result = window.prompt('Category', record.name);
        save({ ...record, name: result, children: [], isRoot: true });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return null;
};

const CategoryCreate = props => {
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(props.basePath);
        refresh();
    };

    return (
        <Create {...props} onSuccess={onSuccess}>
            <Prompt label="Category name" />
        </Create>
    );
};

export default CategoryCreate;
