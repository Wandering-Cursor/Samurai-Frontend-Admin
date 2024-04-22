export class SearchFilterOption {
  visibleName: string = "";
  value: string | undefined = undefined;
}

export class SearchFilter {
  title: string = "";
  propertyName: string = "";
  placeholder: string = "";
  options?: SearchFilterOption[] | undefined;
}
