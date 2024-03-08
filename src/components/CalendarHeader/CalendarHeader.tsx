import { Item, List, Title, Wrapper } from "./CalendarHeader.styled";
import { Icon } from "..";

export interface CalendarHeaderProps {
  previousMonth: () => void;
  nextMonth: () => void;
  months: string[];
  currentDate: Date;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  previousMonth,
  nextMonth,
  months,
  currentDate,
}) => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Icon
            idIcon="down"
            onClick={previousMonth}
            aria-label="Previous month"
            width={30}
            height={30}
          />
        </Item>
        <Item>
          <Icon
            idIcon="up"
            onClick={nextMonth}
            aria-label="Previous month"
            width={30}
            height={30}
          />
        </Item>
      </List>
      <Title>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </Title>
    </Wrapper>
  );
};
