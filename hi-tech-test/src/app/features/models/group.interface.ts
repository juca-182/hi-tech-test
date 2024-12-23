export interface Group {
  id: number;
  name: string;
  participants: number;
  response_target: number;
  valid_responses: number;
  site: string;
  start_date: string; 
  end_date: string;
  survey_date: string;
  survey_link: string;
  survey_admin_kit: string;
  backup_surveys: string;
}
