import React from 'react';
import {useRouter} from "next/router";
import Link from 'next/link';
import { supplementData } from "../../api/supplements";

const Supplement = () => {
    const router = useRouter();
    const { query } = router;
    const supplement = supplementData.filter((supplement) => supplement.id === query.slug);
    return (
        <div className="supplement">
            <h4 className="path"><Link href="/"><a className="path">Home</a></Link> / <Link href="/supplements"><a className="path">Supplements</a></Link> / <span className="path-slug">{supplement[0]?.name}</span></h4>
            <div className="supplement-details">
                <img src={`${supplement[0]?.img}`} alt="" className="supplement-img"/>
                <div className="vertical-line"/>
                <div className="supplement-information">
                    <h1 className="supplement-title">{supplement[0]?.name}</h1>
                    <p className="supplement-description">{supplement[0]?.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Supplement;