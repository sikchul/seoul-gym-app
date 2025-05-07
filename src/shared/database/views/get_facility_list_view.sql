CREATE OR REPLACE VIEW get_facility_list_view AS
SELECT facilities.*,
       facilities.stats ->> 'likes' AS likes

FROM facilities