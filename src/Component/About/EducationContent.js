import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

function EducationContent() {
    return (
        <>
            <Typography variant="h5" component="h2" gutterBottom>
                Daffodil International University-DIU
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom>
                Undergraduate, Computer Science and Engineering 
            </Typography>
            <Typography variant="body2" component="h2" gutterBottom>
                SCGPA - 3.5
            </Typography>
            <Typography variant="body2" component="h2" gutterBottom>
                2016 - 2020
            </Typography>
            <Divider />
        </>
    )
}

export default EducationContent
