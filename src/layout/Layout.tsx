import React from 'react';
import {
    Layout,
    Sidebar,
    useNotify,
    useRedirect,
    useDataProvider,
} from 'react-admin';

import { AppLocationContext } from '@react-admin/ra-navigation';
import { SidebarOpenPreferenceSync } from '@react-admin/ra-preferences';

import AppBar from './AppBar';
import Menu from './Menu';

import { TourProvider } from '@react-admin/ra-tour';
import { usePreferences } from '@react-admin/ra-preferences';

import tours from '../tours/tours';

const CustomSidebar = (props: any) => <Sidebar {...props} size={200} />;

export default (props: any) => {
    const notify = useNotify();
    const redirect = useRedirect();
    const [tourPreferences, setTourPreferences] = usePreferences('tour');
    const dataProvider = useDataProvider();

    return (
        <AppLocationContext>
            <TourProvider
                tours={tours}
                tools={{ notify, redirect, setTourPreferences, dataProvider }}
                initialState={tourPreferences}
            >
                <>
                    <SidebarOpenPreferenceSync />
                    <Layout
                        {...props}
                        appBar={AppBar}
                        sidebar={CustomSidebar}
                        menu={Menu}
                    />
                </>
            </TourProvider>
        </AppLocationContext>
    );
};
