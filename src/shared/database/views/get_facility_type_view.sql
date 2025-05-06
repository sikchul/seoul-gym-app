CREATE OR REPLACE VIEW get_facility_type_view AS
SELECT facilities.bk_cd_name
FROM public.facilities
GROUP BY facilities.bk_cd_name;