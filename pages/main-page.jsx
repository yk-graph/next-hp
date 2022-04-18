import Layout from '@/components/Layout'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'

export default function MainPage() {
  const router = useRouter()
  const cookie = new Cookies()

  /**
   *@description ログアウトの処理として、cookieの値を削除するための関数
   */
  const logout = () => {
    cookie.remove('access_token', { path: '/' }) // 第一引数：cookieのkey名, 第二引数：指定したパスの中で変更を適用させるための記述
    router.push('/')
  }

  return (
    <Layout title="Main Page">
      <svg
        onClick={logout}
        className="mt-10 cursor-pointer w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </Layout>
  )
}
