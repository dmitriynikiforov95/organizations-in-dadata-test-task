import React from "react";

import {DadataApiServiceConsumer} from "../dadata-api-service-context/";


const withDadataApiService = Wrapped => {
    return props => {
        return (
          <DadataApiServiceConsumer>
            {dadataApiService => {
              return (<Wrapped {...props} dadataApiService={dadataApiService}/>)
            }}
          </DadataApiServiceConsumer>
        );
      };
}

export default withDadataApiService;

