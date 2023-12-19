import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [err, setErr] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(url)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => setErr(err))
    .finally(() => setLoading(false))
  }, [url])

  return { data, err, isLoading }
}

export default useFetch