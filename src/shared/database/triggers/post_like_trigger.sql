CREATE OR REPLACE FUNCTION public.handle_facility_like()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
    UPDATE public.facilities SET stats = jsonb_set(stats, '{likes}', ((stats->>'likes')::int + 1)::text::jsonb) WHERE ft_idx = NEW.ft_idx;
    RETURN NEW;
END;
$$;

CREATE TRIGGER facility_like_trigger
AFTER INSERT ON public.facility_likes
FOR EACH ROW EXECUTE FUNCTION public.handle_facility_like();


CREATE OR REPLACE FUNCTION public.handle_facility_unlike()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
    UPDATE public.facilities SET stats = jsonb_set(stats, '{likes}', ((stats->>'likes')::int - 1)::text::jsonb) WHERE ft_idx = OLD.ft_idx;
    RETURN OLD;
END;
$$;

CREATE TRIGGER facility_unlike_trigger
AFTER DELETE ON public.facility_likes
FOR EACH ROW EXECUTE FUNCTION public.handle_facility_unlike();