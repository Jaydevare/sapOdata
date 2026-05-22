using my.sales as db from '../db/schema';

service CatalogService {
    @odata.draft.enabled
    
    entity SalesOrders
        as Projection on db.SalesOrders;
}