export function downloadCSV(data) {
    // Extract headers from the first object in the array
    const headers = Object.keys(data[0]);

    // Convert array of objects to CSV format
    const csv = [
        headers.join(','), // Header row
        ...data.map(item => headers.map(header => item[header]).join(','))
    ].join('\n');
    
    // Create a Blob containing the CSV data
    const blob = new Blob([csv], { type: 'text/csv' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'feedback.csv';

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
}


import * as XLSX from 'xlsx';

export function downloadExcel(data) {
    // Convert the data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // Create a new workbook and add the worksheet to it
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Feedback');

    // Generate an Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Create a Blob from the Excel file
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'feedback.xlsx';

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
}
