import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Verify = () => {
  const { navigate, token, setCartItems, BACKEND_URL } = useContext(ShopContext)
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) return

      const response = await axios.post(
        `${BACKEND_URL}/api/order/verifyStripe`,
        { success, orderId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )

      if (response.data.success) {
        setCartItems({})
        navigate('/orders')
      } else {
        navigate('/cart')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])

  return <div></div>
}

export default Verify
