export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string
          comment_id: number
          created_at: string
          ft_idx: number | null
          profile_id: string | null
          updated_at: string
        }
        Insert: {
          comment: string
          comment_id?: never
          created_at?: string
          ft_idx?: number | null
          profile_id?: string | null
          updated_at?: string
        }
        Update: {
          comment?: string
          comment_id?: never
          created_at?: string
          ft_idx?: number | null
          profile_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_detail_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_list_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      facilities: {
        Row: {
          ar_cd_name: string
          bk_cd_name: string
          ft_addr: string
          ft_addr_detail: string
          ft_bigo: string
          ft_homepage: string
          ft_idx: number
          ft_info_time: string
          ft_kind_name: string
          ft_money: string
          ft_operation_name: string
          ft_org: string
          ft_park: string
          ft_phone: string
          ft_post: string
          ft_si: string
          ft_size: string
          ft_title: string
          ft_wd_time: string
          ft_we_time: string
          images: string[]
          rt_cd_name: string
          stats: Json
        }
        Insert: {
          ar_cd_name?: string
          bk_cd_name?: string
          ft_addr?: string
          ft_addr_detail?: string
          ft_bigo?: string
          ft_homepage?: string
          ft_idx: number
          ft_info_time?: string
          ft_kind_name?: string
          ft_money?: string
          ft_operation_name?: string
          ft_org?: string
          ft_park?: string
          ft_phone?: string
          ft_post?: string
          ft_si?: string
          ft_size?: string
          ft_title?: string
          ft_wd_time?: string
          ft_we_time?: string
          images?: string[]
          rt_cd_name?: string
          stats?: Json
        }
        Update: {
          ar_cd_name?: string
          bk_cd_name?: string
          ft_addr?: string
          ft_addr_detail?: string
          ft_bigo?: string
          ft_homepage?: string
          ft_idx?: number
          ft_info_time?: string
          ft_kind_name?: string
          ft_money?: string
          ft_operation_name?: string
          ft_org?: string
          ft_park?: string
          ft_phone?: string
          ft_post?: string
          ft_si?: string
          ft_size?: string
          ft_title?: string
          ft_wd_time?: string
          ft_we_time?: string
          images?: string[]
          rt_cd_name?: string
          stats?: Json
        }
        Relationships: []
      }
      facility_likes: {
        Row: {
          ft_idx: number
          profile_id: string
        }
        Insert: {
          ft_idx: number
          profile_id: string
        }
        Update: {
          ft_idx?: number
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_likes_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "facility_likes_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_detail_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "facility_likes_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_list_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "facility_likes_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar: string
          created_at: string
          nickname: string
          profile_id: string
          updated_at: string
          useremail: string
        }
        Insert: {
          avatar: string
          created_at?: string
          nickname: string
          profile_id: string
          updated_at?: string
          useremail: string
        }
        Update: {
          avatar?: string
          created_at?: string
          nickname?: string
          profile_id?: string
          updated_at?: string
          useremail?: string
        }
        Relationships: []
      }
    }
    Views: {
      get_facility_comment_view: {
        Row: {
          avatar: string | null
          comment: string | null
          comment_id: number | null
          created_at: string | null
          ft_idx: number | null
          is_my_comment: boolean | null
          nickname: string | null
          profile_id: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "facilities"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_detail_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_ft_idx_facilities_ft_idx_fk"
            columns: ["ft_idx"]
            isOneToOne: false
            referencedRelation: "get_facility_list_view"
            referencedColumns: ["ft_idx"]
          },
          {
            foreignKeyName: "comments_profile_id_profiles_profile_id_fk"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["profile_id"]
          },
        ]
      }
      get_facility_detail_view: {
        Row: {
          ar_cd_name: string | null
          bk_cd_name: string | null
          ft_addr: string | null
          ft_addr_detail: string | null
          ft_bigo: string | null
          ft_homepage: string | null
          ft_idx: number | null
          ft_info_time: string | null
          ft_kind_name: string | null
          ft_money: string | null
          ft_operation_name: string | null
          ft_org: string | null
          ft_park: string | null
          ft_phone: string | null
          ft_post: string | null
          ft_si: string | null
          ft_size: string | null
          ft_title: string | null
          ft_wd_time: string | null
          ft_we_time: string | null
          images: string[] | null
          is_liked: boolean | null
          likes: string | null
          rt_cd_name: string | null
          stats: Json | null
        }
        Insert: {
          ar_cd_name?: string | null
          bk_cd_name?: string | null
          ft_addr?: string | null
          ft_addr_detail?: string | null
          ft_bigo?: string | null
          ft_homepage?: string | null
          ft_idx?: number | null
          ft_info_time?: string | null
          ft_kind_name?: string | null
          ft_money?: string | null
          ft_operation_name?: string | null
          ft_org?: string | null
          ft_park?: string | null
          ft_phone?: string | null
          ft_post?: string | null
          ft_si?: string | null
          ft_size?: string | null
          ft_title?: string | null
          ft_wd_time?: string | null
          ft_we_time?: string | null
          images?: string[] | null
          is_liked?: never
          likes?: never
          rt_cd_name?: string | null
          stats?: Json | null
        }
        Update: {
          ar_cd_name?: string | null
          bk_cd_name?: string | null
          ft_addr?: string | null
          ft_addr_detail?: string | null
          ft_bigo?: string | null
          ft_homepage?: string | null
          ft_idx?: number | null
          ft_info_time?: string | null
          ft_kind_name?: string | null
          ft_money?: string | null
          ft_operation_name?: string | null
          ft_org?: string | null
          ft_park?: string | null
          ft_phone?: string | null
          ft_post?: string | null
          ft_si?: string | null
          ft_size?: string | null
          ft_title?: string | null
          ft_wd_time?: string | null
          ft_we_time?: string | null
          images?: string[] | null
          is_liked?: never
          likes?: never
          rt_cd_name?: string | null
          stats?: Json | null
        }
        Relationships: []
      }
      get_facility_list_view: {
        Row: {
          ar_cd_name: string | null
          bk_cd_name: string | null
          ft_addr: string | null
          ft_addr_detail: string | null
          ft_bigo: string | null
          ft_homepage: string | null
          ft_idx: number | null
          ft_info_time: string | null
          ft_kind_name: string | null
          ft_money: string | null
          ft_operation_name: string | null
          ft_org: string | null
          ft_park: string | null
          ft_phone: string | null
          ft_post: string | null
          ft_si: string | null
          ft_size: string | null
          ft_title: string | null
          ft_wd_time: string | null
          ft_we_time: string | null
          images: string[] | null
          likes: string | null
          rt_cd_name: string | null
          stats: Json | null
        }
        Insert: {
          ar_cd_name?: string | null
          bk_cd_name?: string | null
          ft_addr?: string | null
          ft_addr_detail?: string | null
          ft_bigo?: string | null
          ft_homepage?: string | null
          ft_idx?: number | null
          ft_info_time?: string | null
          ft_kind_name?: string | null
          ft_money?: string | null
          ft_operation_name?: string | null
          ft_org?: string | null
          ft_park?: string | null
          ft_phone?: string | null
          ft_post?: string | null
          ft_si?: string | null
          ft_size?: string | null
          ft_title?: string | null
          ft_wd_time?: string | null
          ft_we_time?: string | null
          images?: string[] | null
          likes?: never
          rt_cd_name?: string | null
          stats?: Json | null
        }
        Update: {
          ar_cd_name?: string | null
          bk_cd_name?: string | null
          ft_addr?: string | null
          ft_addr_detail?: string | null
          ft_bigo?: string | null
          ft_homepage?: string | null
          ft_idx?: number | null
          ft_info_time?: string | null
          ft_kind_name?: string | null
          ft_money?: string | null
          ft_operation_name?: string | null
          ft_org?: string | null
          ft_park?: string | null
          ft_phone?: string | null
          ft_post?: string | null
          ft_si?: string | null
          ft_size?: string | null
          ft_title?: string | null
          ft_wd_time?: string | null
          ft_we_time?: string | null
          images?: string[] | null
          likes?: never
          rt_cd_name?: string | null
          stats?: Json | null
        }
        Relationships: []
      }
      get_facility_type_view: {
        Row: {
          bk_cd_name: string | null
        }
        Relationships: []
      }
      get_location: {
        Row: {
          ar_cd_name: string | null
        }
        Relationships: []
      }
      get_location_view: {
        Row: {
          ar_cd_name: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
