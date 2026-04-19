// サインアップ
export interface SignUpParams {
  name: string
  email: string
  password: string
  password_confirmation: string
}

// サインイン
export interface SignInParams {
  email: string
  password: string
}

// ユーザー
export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  allowPasswordChange: boolean
  created_at: Date
  updated_at: Date
}

// 本
export interface Book {
  id: string
  title: string
  author: string
  imageUrl: string
}