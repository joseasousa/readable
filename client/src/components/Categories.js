import React from 'react';
import { connect } from 'react-redux';
import { Collection, CollectionItem } from 'react-materialize';
import { categoriasRequest } from '../actions';

class Categories extends React.Component {
  componentDidMount() {
    this.props.categorie();
  }

  render() {
    const { categorias, isFetching } = this.props;
    return (
      <div>
        {
          !isFetching && (
            <Collection>
              {categorias.map(cate => (
                <CollectionItem key={cate.name}>{cate.name}</CollectionItem>
            ))}
            </Collection>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categorias: state.categorias.categorias,
  isFetching: state.categorias.isFetching,
  error: state.categorias.error,
});

const mapDispatchToProps = dispatch => ({
  categorie: () => {
    dispatch(categoriasRequest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
