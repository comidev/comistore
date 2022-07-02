import { getCountries } from "api/customer";
import { useEffect, useState } from "react";

export default function useCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries().then(setCountries);
    }, []);

    return { countries };
}
