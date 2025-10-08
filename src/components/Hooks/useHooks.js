import axios from "axios"
import { useEffect, useState } from "react"

const useHooks = () => {
      const [products, setproducts] = useState([])
      const [loading, setLoading] = useState([true])
      const [error, setError] = useState([null])

      useEffect (() => {
            setLoading(true)
            axios('./Datafetch.json')
            .then(data => setproducts(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
      }, [])
      return [ products, loading, error ]
}

export default useHooks