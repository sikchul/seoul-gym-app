CREATE OR REPLACE VIEW get_facility_detail_view AS
SELECT facilities.*,
       facilities.stats ->> 'likes' AS likes,

  (SELECT EXISTS
     (SELECT 1
      FROM public.facility_likes
      WHERE facility_likes.ft_idx = facilities.ft_idx
        AND facility_likes.profile_id = auth.uid())) AS is_liked
FROM facilities