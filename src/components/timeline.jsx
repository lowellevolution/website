import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

const color = {
  primary: '#693131',
  blue: '#142936',
  cyan: '#4C8DB5',
  gray: '#efefef',
};

const ProjectTimeline = () => {
  return (
    <>
      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="January 2019"
          dateInnerStyle={{ background: color.primary, color: '#fff' }}
        >
          <p>
            <strong>Project Cost Review &amp; Reconciliation</strong>
          </p>
          <p>
            <em>Perkins Eastman &amp; Skanska</em>
          </p>
          <p>
            The project team will review the current schematic plans and
            reconcile costs with the projected budget. If required, project
            manage will apply value management process techniques and report to
            the School Building Committee during a tentative 1/31 meeting.
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="February 7, 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <strong>School Building Committee Vote</strong>
          </p>
          <p>
            School Building Committee will meet to vote to approve the Schematic
            Design and submit plan to the MSBA.
          </p>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="February 12, 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <strong>City Council Vote</strong>
          </p>
          <p>
            City Council will vote to approve the Schematic Design and submit
            plan to the MSBA.
          </p>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="February 20, 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <strong>Schematic Design Submission</strong>
          </p>
          <p>
            Deadline for Perkins Eastman to submit the final Schematic Design to
            the MSBA for the April board meeting.
          </p>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="April 10, 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <strong>MSBA Board Meeting</strong>
          </p>
          <p>
            MSBA board will meet to review/approve Lowell's schematic design
            submission and vote on project scope and budget.
          </p>
        </TimelineItem>
        {/* <TimelineItem
          key="006"
          dateText="Apr - Aug 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Project Funding Appropriation by City</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="007"
          dateText="Aug - Nov 2019"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Construction Manager at Risk (CM) Selection Process</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="008"
          dateText="Aug 2019 - Apr 2020"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Design Development</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="009"
          dateText="May 2020 - May 2021"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Develop Construction Documents</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="010"
          dateText="May 2020 - May 2021"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Develop Construction Documents</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="011"
          dateText="May - Jun 2021"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Project goes out to bid</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="012"
          dateText="Jul 2021 - Aug 2022"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>Construction Phase 1, Build New Gymnasium</em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="013"
          dateText="Jul 2022 - Dec 2023"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>
              Construction Phase 2, Build New Freshman Academy and Renovate West
              Side 1980 Building
            </em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="014"
          dateText="Jan 2024 - Mar 2025"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>
              Construction Phase 3, Renovation East Side of 1980 and North Side
              of 1922 Buildings
            </em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="015"
          dateText="Apr 2025 - Jun 2026"
          dateInnerStyle={{ background: color.gray, color: '#666' }}
        >
          <p>
            <em>
              Construction Phase 4, Renovation South Side of 1922 Building
            </em>
          </p>
        </TimelineItem>
        <TimelineItem
          key="016"
          dateText="Aug 2026"
          dateInnerStyle={{ background: color.primary, color: '#fff' }}
        >
          <p>
            <strong>Full Occupancy of Completed School</strong>
          </p>
        </TimelineItem> */}
      </Timeline>
      <p className="has-text-centered" style={{ paddingTop: '1.5rem', marginTop: '1.5rem', paddingBottom: '1.5rem', marginBottom: '1.5rem', borderTop: '1px solid #fff' }}>
        <a className="button is-info " href="https://lowellhsproject.com/163/Lowell-High-School-Project-Timeline">
          View Official Timeline
        </a>
        .
      </p>
    </>
  );
};

export default ProjectTimeline;
