namespace my.analytical;

using { cuid, managed } from '@sap/cds/common';

entity Employees : cuid, managed {

    empId       : String(10);
    empName     : String(100);
    department  : String(40);
    designation : String(40);
    salary      : Decimal(10,2);
    currency    : String(5);

}