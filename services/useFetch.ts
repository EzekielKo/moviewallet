import { useState } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [DataTransfer, setData] = useState<T | null>(null);
    const [DaloadingtaTransfer, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
}