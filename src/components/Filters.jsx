import Button from "./Button";

function Filters({ filters, activeFilter, onFilterChange }) {
  return (
    <div>
      {filters?.map((filter, index) => (
        <Button
          key={index}
          text={filter}
          color={activeFilter == filter ? "#eff6ff" : "#ffffff"}
          hoverColor={"#e5e7eb"}
          textColor={activeFilter == filter ? "#16a34a" : "#000000"}
          hoverTextColor={"#16a34a"}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
}

export default Filters;
