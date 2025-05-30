CREATE OR REPLACE VIEW get_target_facility_comment_view AS
SELECT c.*,
       p.avatar,
       p.nickname,
       (c.profile_id = auth.uid()) AS is_my_comment
FROM comments c
INNER JOIN profiles p ON c.profile_id = p.profile_id
ORDER BY c.created_at DESC;