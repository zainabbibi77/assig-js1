import Link from "next/link";
import "@/app/globals.css";

export default function CountryName({params}:any) {
    
    const countries:{
        name:string,
        population:number,
        capital:string
    }[]=[
        {
            name: "Pakistan",
            population: 251269164,
            capital: "Islamabad"
        },
        {
            name: "India",
            population: 1450935791,
            capital: "New Delhi"
        },
        {
            name: "Turkey",
            population: 87473805,
            capital: "Ankara"
        },
        {
            name: "China",
            population: 1418268586,
            capital: "Beijing"
        },
        {
            name: "Norway",
            population: 5591729,
            capital: "Oslo"
        },
    ];

    function findCountry(route:string){
        return countries.find(country=>country.name.toLowerCase() == route.toLowerCase())

    }

let result=findCountry(params.country_name)

     return (
    <div>
        <div>
        {
            result ? (
        <>
        <h1>Country Name:{result.name}</h1>
        <h1>Country Capital:{result.capital}</h1>
        <h1>Country Population:{result.population}</h1>
        </>
            ):(
                <h1>country not found</h1>
            )
        }
        </div>
        <div>
            <li className="cust_button">
                <Link href="/">Back</Link>
            </li>
        </div>
        </div>
        );
     }
  
 
  
