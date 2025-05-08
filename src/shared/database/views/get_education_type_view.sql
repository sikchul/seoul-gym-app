CREATE OR REPLACE VIEW get_education_type_view AS
SELECT educations.topic
FROM public.educations
GROUP BY educations.topic;