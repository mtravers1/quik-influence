import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const exportToExcel = ({ data, fileName }: { data: any[], fileName: string }) => {
    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataToSave = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(dataToSave, fileName + fileExtension);

}