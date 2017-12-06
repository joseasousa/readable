import React from 'react';
import { connect } from 'react-redux';
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
            <ul className="collection" >
              {categorias.map(cate => (
                <li className="collection-item" key={cate.name}>{cate.name}</li>
            ))}
            </ul>
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
