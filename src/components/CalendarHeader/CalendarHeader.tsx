import {
  Input,
  InputSearch,
  Item,
  List,
  Title,
  Wrapper,
} from "./CalendarHeader.styled";
import { FileExport, FileImport, Icon, Select } from "..";
import { Value as Difficulty } from "../Select/Select";

export interface CalendarHeaderProps {
  previousMonth: () => void;
  nextMonth: () => void;
  months: string[];
  currentDate: Date;
  onCountryChange: (countryCode: string) => void;
  handleSearchTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
  selectedDifficulty: Difficulty | null;
  onChangeDifficulty: (difficulty: Difficulty | null) => void;
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
        <Item>
          <InputSearch
            type="text"
            value={searchText}
            onChange={handleSearchTextChange}
            placeholder="Search tasks..."
            style={{ marginBottom: "10px" }}
          />
        </Item>
        <Item>
          <Select
            setSelected={onChangeDifficulty}
            selected={selectedDifficulty}
          />
        </Item>
        <Item>
          <div onClick={onDownloadButtonClick}>
            <Icon
              idIcon="download"
              aria-label="Download"
              width={30}
              height={30}
            />
          </div>
        </Item>
      </List>
      <Title>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </Title>
    </Wrapper>
  );
};
