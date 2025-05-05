CREATE OR REPLACE VIEW get_location_view AS
 SELECT
   facilities.ar_cd_name
 FROM public.facilities
 GROUP BY facilities.ar_cd_name;