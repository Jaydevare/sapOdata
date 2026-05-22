using CatalogService from './service';

annotate CatalogService.EmployeeDetails with @(

    UI.HeaderInfo : {
        TypeName : 'Employee Detail',
        TypeNamePlural : 'Employee Details',

        Title : {
            $Type : 'UI.DataField',
            Value : EmployeeID
        }
    },

    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : EmpId,
            Label : 'Employee ID'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpFirstName,
            Label : 'First Name'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpLastName,
            Label : 'Last Name'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpDeptName,
            Label : 'Department Name'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpLoc,
            Label : 'Location'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpSalary,
            Label : 'Salary'
        },

        {
            $Type : 'UI.DataField',
            Value : EmpRole,
            Label : 'Role'
        }
    ],

    UI.SelectionFields : [
        EmpDeptName,
        EmpRole
    ],

    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'General Information',
            Target : '@UI.FieldGroup#General'
        }
    ],

    UI.FieldGroup #General : {
        Data : [

            {
                $Type : 'UI.DataField',
                Value : EmpId,
                Label : 'Employee ID'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpFirstName,
                Label : 'First Name'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpLastName,
                Label : 'Last Name'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpDeptName,
                Label : 'Department Name'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpLoc,
                Label : 'Location'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpSalary,
                Label : 'Salary'
            },

            {
                $Type : 'UI.DataField',
                Value : EmpRole,
                Label : 'Role'
            }

        ]
    }

);