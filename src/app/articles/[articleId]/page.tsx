import Link from "next/link";
export default function NewsArticle({params,searchParams}: 
    { params:Promise<{articleId:string}>;
    searchParams:Promise<{lang?:"en"|"es" |"fr"}>;
    }){
     return <div>
        <h1>News article</h1>
        <p>Reading in language</p>
        <div>
            <Link href="/articles/id?lang=en">English</Link>
            <Link href="/articles/id?lang=es">Spanish</Link>
            <Link href="/articles/id?lang=fr">French</Link>

        </div>
     </div>
}