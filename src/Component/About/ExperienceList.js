import React from 'react'
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Link from '@material-ui/core/Link';

function ExperienceList() {
    return (
        <React.Fragment>
                <Typography variant="h5" component="h2" gutterBottom>
                    Chief Operating Officer
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://devxpart.com/">
                        DevXpart - Full-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Jan 2019 - Jan 2020 - 1 yr 1 mo
                </Typography>
            <Divider />
                <Typography variant="h5" component="h2" gutterBottom>
                    Writer
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="http://youthcarnival.org/bn/author/marufahmed/">
                        Youth Carnival - Part-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    May 2018 - May 2019 - 1 yr 1 mo
                </Typography>
            <Divider />
                <Typography variant="h5" component="h2" gutterBottom>
                    Managing Editor
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://www.projuktiravijatri.com/author/mdmaruf/">
                        Projuktir Avijatri - প্রযুক্তির অভিযাত্রি - Full-time
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    July 2017 - Sep 2018 - 1 yr 3 mo
                </Typography>
            <Divider />
                <Typography variant="h5" component="h2" gutterBottom>
                    Teacher Assistant
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <Link href="https://daffodilvarsity.edu.bd/">
                        Daffodil International University-DIU - Contract
                    </Link>
                </Typography>
                <Typography variant="body2" component="p" gutterBottom>
                    Jan 2018 - Apr 2018 - 4 mo
                </Typography>
            <Divider />
        </React.Fragment>
    )
}

export default ExperienceList
