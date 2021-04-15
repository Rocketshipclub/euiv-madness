import React, { FunctionComponent } from 'react';

export type CountryProps = {
    name: string,
    flag: string
}

export const Country: FunctionComponent<CountryProps> = ({name, flag}) => {
    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <h1>{name}</h1>
            <div style={{width:"250px"}}>
                <img src={'/flags/'+flag+'.png'} style={{height:"100%", width:"100%"}}/>
            </div>
        </div>
    );
}