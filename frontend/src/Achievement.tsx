import React, { FunctionComponent } from 'react';

export type AchievementProps = {
    name: string,
    summary: string
}

export const Achievement: FunctionComponent<AchievementProps> = ({name, summary}) => {
    return(
        <div style={{flex:"auto"}}>
            <h3>{name}</h3>
            <div>{summary}</div>
            <hr style={{margin:"2em 40% 0 40%"}}/>
        </div>
    )
}