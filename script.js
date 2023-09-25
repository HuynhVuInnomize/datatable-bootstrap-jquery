var table;
const data = [
    {
        ancillaryId: 1,
        ancillaryName: "MONTEBELL OPEN MRI, LLC 338",
        npi: "NPI-69999",
        practiceType: 1,
        npi: "NPI-69999",
        ancillaryNo: "0355337248",
        status: 1,
        contracted: "Y",
    },
    {
        ancillaryId: 2,
        ancillaryName: "MONTEBELL OPEN MRI, LLC 398",
        npi: "NPI-69999",
        practiceType: 1,
        npi: "NPI-69999",
        ancillaryNo: "0355337249",
        status: 1,
        contracted: "Y",
    },
    {
        ancillaryId: 3,
        ancillaryName: "MONTEBELL OPEN MRI, LLC 462",
        npi: "NPI-69999",
        practiceType: 1,
        npi: "NPI-69999",
        ancillaryNo: "0355337235",
        status: 2,
        contracted: "N",
    },
]

$(document).ready(function(){
    $('#ancillaryTable').dataTable({
        data: data,
        columns: [
            {
                data: "ancillaryId",
            },
            {
                data: "ancillaryName",
            },
            {
                data: "npi",
            },
            {
                data: "ancillaryNo"
            },
            {
                data: "practiceType"
            },
            {
                data: "contracted"
            },
            {
                data: "status"
            },
            {
                width: "15%",
                render: function (data, type, row, meta) {
                    return `
                        <button type="button" class="btn btn-primary" onclick="handleAdd()">Add</button>
                        <button type="button" class="btn btn-primary" onclick="handleDelete(${meta.row})">Delete</button>
                        <button type="button" class="btn btn-primary inactive">Inactive</button>
                    `;
                },
            }
        ],
        buttons: [
            {
                text: 'Add',
    
            }
        ],
        paging: true,
        searching: true,
        responsive: true,
    });

    $("#ancillaryTable .inactive").on("click", function() {
        $(".inactive").removeClass("btn-primary");
    })

    $(".add-ancillary").on("click", function() {
        handleAdd();
    })
 })


 function handleAdd() {
    var table = $('#ancillaryTable').DataTable();   
    if (!table) {
        return;
    }

    const ancillary = {
        ancillaryId: 1,
        ancillaryName: "MONTEBELL OPEN MRI, LLC 338",
        npi: "NPI-69999",
        practiceType: 1,
        npi: "NPI-69999",
        ancillaryNo: "0355337248",
        status: 1,
        contracted: "Y",
        action: "create"
    };
    trimData(ancillary)
    table.row.add(ancillary).draw();
 }

 function handleDelete(value) {
    $('#ancillaryTable tr').last().remove();    
 }

 function trimData(obj) {
    Object.keys(obj).map(k => obj[k] = typeof obj[k] == 'string' ? obj[k].trim() : obj[k]);
}
