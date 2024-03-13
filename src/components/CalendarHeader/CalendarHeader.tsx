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
    const countryCode = event.target.value;
    if (countryCode.length >= 2) onCountryChange(countryCode);
  };

  return (
    <Wrapper>
      <List>
        <Item>
          <div onClick={previousMonth}>
            <Icon
              idIcon="down"
              aria-label="Previous month"
              width={30}
              height={30}
            />
          </div>
        </Item>
        <Item>
          <div onClick={nextMonth}>
            <Icon idIcon="up" aria-label="Next month" width={30} height={30} />
          </div>
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
