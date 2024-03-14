import {
  Input,
  InputSearch,
  Item,
  ItemIcon,
  List,
  ListIcon,
  Title,
  Wrapper,
} from "./CalendarHeader.styled";
import { FileExport, FileImport, Icon, Select } from "..";
import { Value } from "../Select/Select";

export interface CalendarHeaderProps {
  previousMonth: () => void;
  nextMonth: () => void;
  months: string[];
  currentDate: Date;
  onCountryChange: (countryCode: string) => void;
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  selectedDifficulty: Value | null;
  onChangeDifficulty: (difficulty: Value | null) => void;
  onDownloadButtonClick: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  previousMonth,
  nextMonth,
  months,
  currentDate,
  onCountryChange,
  handleSearchTextChange,
  searchText,
  selectedDifficulty,
  onChangeDifficulty,
  onDownloadButtonClick,
}) => {
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const countryCode = event.target.value;
    if (countryCode.length >= 2) onCountryChange(countryCode);
  };

  return (
    <Wrapper>
      <ListIcon>
        <ItemIcon>
          <div onClick={previousMonth}>
            <Icon
              idIcon="left"
              aria-label="Previous month"
              width={30}
              height={30}
            />
          </div>
        </ItemIcon>
        <ItemIcon>
          <div onClick={nextMonth}>
            <Icon
              idIcon="right"
              aria-label="Next month"
              width={30}
              height={30}
            />
          </div>
        </ItemIcon>
        <ItemIcon>
          <FileExport />
        </ItemIcon>
        <ItemIcon>
          <FileImport />
        </ItemIcon>
        <ItemIcon>
          <div onClick={onDownloadButtonClick}>
            <Icon
              idIcon="download"
              aria-label="Download"
              width={30}
              height={30}
            />
          </div>
        </ItemIcon>
      </ListIcon>
      <Title>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </Title>
      <List>
        <Item>
          <Select
            setSelected={onChangeDifficulty}
            selected={selectedDifficulty}
          />
        </Item>
        <Item>
          <Input
            type="text"
            placeholder="Code"
            onChange={handleCountryChange}
          />
        </Item>
        <Item>
          <InputSearch
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="Search tasks..."
          />
        </Item>
      </List>
    </Wrapper>
  );
};
