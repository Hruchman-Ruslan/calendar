import { Input, Item, List, Title, Wrapper } from "./CalendarHeader.styled";
import { FileExport, FileImport, Icon } from "..";

export interface CalendarHeaderProps {
  previousMonth: () => void;
  nextMonth: () => void;
  months: string[];
  currentDate: Date;
  onCountryChange: (countryCode: string) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  previousMonth,
  nextMonth,
  months,
  currentDate,
  onCountryChange,
}) => {
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onCountryChange(event.target.value);
  };
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
        <Item>
          <FileExport />
        </Item>
        <Item>
          <FileImport />
        </Item>
        <Item>
          <Input
            type="text"
            placeholder="Code"
            onChange={handleCountryChange}
          />
        </Item>
      </List>
      <Title>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </Title>
    </Wrapper>
  );
};
