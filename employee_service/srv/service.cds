using my.emp as db from '../db/schema';

service CatalogService {

    @odata.draft.enabled
    entity EmployeeDetails
        as Projection on db.EmployeeDetails;
}