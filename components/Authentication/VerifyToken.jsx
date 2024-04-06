




// const router = useRouter()
// const { Page, token } = router?.query
// const [verifyed, setVerifyed] = useState('')

// useEffect(() => {
//     if (Page && token) {
//         verifyUser(Page, token)
//     }
// }, [Page, token])

// const verifyUser = async (uid, token) => {
//     const res = await axios.get(`/auth/verify/${uid}?token=${token}`)
//     if (res?.data?.success) {
//         toast.success(res?.data?.message)
//         router.push('/')
//         dispatch(modalOpenClose('authentication'))
//     }
//     else {
//         toast.error(res?.data?.message)
//         setVerifyed(res?.data?.message)
//         router.push('/')
//     }
// }