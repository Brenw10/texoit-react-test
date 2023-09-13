'use client'

import GlobalLayout from "@/components/GlobalLayout";
import MinMaxWinIntervalTable from "@/movie/MinMaxWinIntervalTable";
import TopStudiosTable from "@/movie/TopStudiosTable";
import MultipleYearsWinnersTable from "@/movie/MultipleYearsWinnersTable";
import YearWinnerTable from "@/movie/YearWinnerTable";
import { Card } from 'react-bootstrap';
import styles from './page.module.css';

export default function Home() {
  return (
    <GlobalLayout>
      <div className={`d-flex gap-3 flex-wrap ${styles.row}`}>
        <div className={`d-flex flex-column gap-3 ${styles.column}`}>
          <Card>
            <Card.Body>
              <h2 className="h4">List years with multiple winners</h2>
              <MultipleYearsWinnersTable />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2 className="h4">Producers with longest and shortest interval between wins</h2>
              <MinMaxWinIntervalTable />
            </Card.Body>
          </Card>
        </div>
        <div className={`d-flex flex-column gap-3 ${styles.column}`}>
          <Card>
            <Card.Body>
              <h2 className="h4">Top 3 studios with winners</h2>
              <TopStudiosTable />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <h2 className="h4">List movie winners by year</h2>
              <YearWinnerTable />
            </Card.Body>
          </Card>
        </div>
      </div>
    </GlobalLayout >
  )
}
