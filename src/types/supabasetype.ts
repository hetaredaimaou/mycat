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
      Commit_Histories: {
        Row: {
          Commit_Count: number | null
          Commit_Date: number | null
          ID: number
          Language: Json | null
        }
        Insert: {
          Commit_Count?: number | null
          Commit_Date?: number | null
          ID?: number
          Language?: Json | null
        }
        Update: {
          Commit_Count?: number | null
          Commit_Date?: number | null
          ID?: number
          Language?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "Commit_Histories_ID_fkey"
            columns: ["ID"]
            isOneToOne: true
            referencedRelation: "User_Commit_Histories"
            referencedColumns: ["Commit_History_ID"]
          },
        ]
      }
      Decoration_Items: {
        Row: {
          Category: string | null
          ID: number
          is_Purchased: boolean | null
          Name: string | null
          Part: string | null
          Price: number | null
        }
        Insert: {
          Category?: string | null
          ID?: number
          is_Purchased?: boolean | null
          Name?: string | null
          Part?: string | null
          Price?: number | null
        }
        Update: {
          Category?: string | null
          ID?: number
          is_Purchased?: boolean | null
          Name?: string | null
          Part?: string | null
          Price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Decoration_Items_ID_fkey"
            columns: ["ID"]
            isOneToOne: true
            referencedRelation: "Users_Decoration_Items"
            referencedColumns: ["Decoration_Item_ID"]
          },
        ]
      }
      User_Commit_Histories: {
        Row: {
          Commit_History_ID: number
          ID: number
          User_ID: number
        }
        Insert: {
          Commit_History_ID: number
          ID?: number
          User_ID: number
        }
        Update: {
          Commit_History_ID?: number
          ID?: number
          User_ID?: number
        }
        Relationships: [
          {
            foreignKeyName: "User_Commit_Histories_User_ID_fkey"
            columns: ["User_ID"]
            isOneToOne: true
            referencedRelation: "Users"
            referencedColumns: ["Github_User_ID"]
          },
        ]
      }
      Users: {
        Row: {
          Created_At: string | null
          Github_User_ID: number
          Github_Username: string
          Total_Coins: number
          Total_Experience: number | null
          Updated_At: string | null
        }
        Insert: {
          Created_At?: string | null
          Github_User_ID: number
          Github_Username: string
          Total_Coins?: number
          Total_Experience?: number | null
          Updated_At?: string | null
        }
        Update: {
          Created_At?: string | null
          Github_User_ID?: number
          Github_Username?: string
          Total_Coins?: number
          Total_Experience?: number | null
          Updated_At?: string | null
        }
        Relationships: []
      }
      Users_Decoration_Items: {
        Row: {
          Decoration_Item_ID: number | null
          ID: number
          User_ID: number | null
        }
        Insert: {
          Decoration_Item_ID?: number | null
          ID?: number
          User_ID?: number | null
        }
        Update: {
          Decoration_Item_ID?: number | null
          ID?: number
          User_ID?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Users_Decoration_Items_User_ID_fkey"
            columns: ["User_ID"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["Github_User_ID"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
