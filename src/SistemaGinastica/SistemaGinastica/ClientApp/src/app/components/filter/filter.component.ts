import { Component, Input } from "@angular/core";
import { faEraser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FormInputType } from "src/app/models/forms/base/form-input-type";
import { Filter } from "src/app/models/filter/filter";
import { FilterField } from "src/app/models/filter/filter-field";



@Component({
  selector: 'lb-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent<T>{  
  icon = {
    clean: faEraser,
    search: faSearch
  };
  FormInputType = FormInputType;
  @Input() filter: Filter<T>; 


  getLayoutSizeClass(field: FilterField) {
    let largeLayout = 'ui-lg-3 ui-md-6';
    if (field.layoutSize == 2) {
      largeLayout = 'ui-lg-6 ui-md-12';
    }
    return largeLayout;
  }
  
  search() {
    this.filter.resetPage();
  }

  clean() {
    this.filter.clean();
  }
  
}
