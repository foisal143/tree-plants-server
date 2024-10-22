import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public query: Record<string, unknown>;
  public modelQuery: Query<T[], T>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.query = query;
    this.modelQuery = modelQuery;
  }

  search(searchFields: string[]) {
    const searchTerm = this?.query?.searchTerm;

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchFields.map(
          key =>
            ({ [key]: { $regex: searchTerm, $options: 'i' } } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }

  filter() {
    const queryObj = { ...this?.query };
    const excludesValue = ['searchTerm', 'sort', 'limit', 'page'];
    excludesValue.forEach(ele => delete queryObj[ele]);

    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }

  sort() {
    const sort = this?.query?.sort || '-createdAt';

    this.modelQuery = this.modelQuery.sort(sort as string);
    return this;
  }

  paginateQuery() {
    const limit = Number(this?.query?.limit) || 10;
    const page = Number(this?.query?.page) || 1;
    const skip = (page - 1) * limit;
    this.modelQuery = this.modelQuery.skip(skip).limit(limit);
    return this;
  }

  fieldsFilter() {
    const fieldsValue = this?.query?.fields as string;
    if (fieldsValue && fieldsValue.trim()) {
      const fields = fieldsValue.split(',').join(' ');

      this.modelQuery = this.modelQuery.select(fields);
    } else {
      // If fieldsValue is empty or not provided, exclude '__v' by default
      this.modelQuery = this.modelQuery.select('-__v');
    }
    return this;
  }
}

export default QueryBuilder;
