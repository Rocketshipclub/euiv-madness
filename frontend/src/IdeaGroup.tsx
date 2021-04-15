import React, { FunctionComponent } from 'react';

export type IdeaGroupProps = {
    name: string,
    group: string
    // TODO
    // Add graphics for each idea group
}

export const IdeaGroup: FunctionComponent<IdeaGroupProps> = ({name, group}) => {
    return(
        <div style={{flex:"auto", width:"33%"}}>
            <h3>{group}</h3>
            <div>{name}</div>
        </div>
    )
}