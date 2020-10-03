function Unittest(props) {
  const buttonArray = props.selectedButtonArray2.map((value, index, array) => {
    return props.index1 === index
      ? value.map((val, ind) => {
          return (
            <p style={{ marginLeft: "5%" }} key={ind}>
              {ind}
            </p>
          );
        })
      : null;
  });
  return (
    <div style={{ border: "1px solid black", padding: "-5%", marginTop: "2%" }}>
      <Row>
        <Col md="2" style={{ marginTop: "5%", marginLeft: "5%" }}>
          <Row>
            <p>
              <b>Detail Name</b>
            </p>
          </Row>
          {buttonArray}
          {buttonArray.length > 0 && (
            <Button
              color="secondary"
              size="sm"
              onClick={event => props.addUnit(event)}
            >
              create another
            </Button>
          )}
        </Col>
        <Col md="2" style={{ marginTop: "5%" }}>
          <Row>
            <p style={{ textAlign: "center" }}>
              <b>Start date</b>
            </p>
          </Row>
          <Row>
            {props.selectedButtonArray2.map((value, index, array) => {
              return props.index1 === index
                ? value.map((val, ind) => {
                    return (
                      <Row noGutters key={ind} style={{ marginTop: "1%" }}>
                        <input
                          className="form-control"
                          size="5"
                          type="text"
                          placeholder="start-date"
                        />
                      </Row>
                    );
                  })
                : null;
            })}
          </Row>
        </Col>
        <Col md="2" style={{ marginTop: "5%" }}>
          <Row>
            <p style={{ textAlign: "center" }}>
              <b>End date</b>
            </p>
          </Row>
          <Row>
            {props.selectedButtonArray2.map((value, index, array) => {
              return props.index1 === index
                ? value.map((val, ind) => {
                    return (
                      <Row noGutters key={ind} style={{ marginTop: "1%" }}>
                        <input
                          className="form-control"
                          size="5"
                          type="text"
                          placeholder="end-date"
                        />
                      </Row>
                    );
                  })
                : null;
            })}
          </Row>
        </Col>
        <Col md="2" style={{ marginTop: "5%" }}>
          <Row>
            <p>
              <b>Res Value</b>
            </p>
          </Row>
          <Row>
            {props.selectedButtonArray2.map((value, index, array) => {
              return props.index1 === index
                ? value.map((val, ind) => {
                    return (
                      <Row noGutters key={ind} style={{ marginTop: "1%" }}>
                        <input
                          className="form-control"
                          size="5"
                          type="text"
                          placeholder="res-value"
                        />
                      </Row>
                    );
                  })
                : null;
            })}
          </Row>
        </Col>
        <Col style={{ marginTop: "10%", marginLeft: "0.02%" }}>
          <Row />
          <Row>
            {props.selectedButtonArray2.map((value, index, array) => {
              return props.index1 === index
                ? value.map((val, ind) => {
                    return (
                      <div key={ind} style={{ marginTop: "35%" }}>
                        <button
                          type="button"
                          className="close"
                          style={{ width: "200", padding: "50" }}
                        >
                          X
                        </button>
                      </div>
                    );
                  })
                : null;
            })}
          </Row>
        </Col>
        <Col md="3" style={{ marginTop: "5%" }}>
          <Row>
            <p>
              <input
                className="form-control"
                type="text"
                size="5"
                name=""
                id=""
                placeholder="DOB/AGE"
              />
            </p>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
//2nd

{
  this.state.flag ? (
    this.state.selectedButtonArray2.map((value, index, array) => {
      return (
        <div key={index + 1}>
          <h4 style={{ marginTop: "5%" }}>Test : {index + 1}</h4>
          <Unittest
            selectedButtonArray2={this.state.selectedButtonArray2}
            addUnit={this.addUnit}
            index1={index + 1}
          />
        </div>
      );
    })
  ) : (
    <Unittest2
      selectedButtonArray={this.state.selectedButtonArray}
      addUnit={this.addUnit}
    />
  );
}


h4 style={{ marginTop: "5%" }}>Test : {index + 1}</h4>
{/*<Col style={{ marginTop: "10%", marginLeft: "0.02%" }}>
          <Row />
          <Row>
            {props.selectedButtonArray.map((value, index) => {
              return (
                <div key={index} style={{ marginTop: "35%" }}>
                  <button
                    type="button"
                    className="close"
                    style={{ width: "200", padding: "50" }}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </Row>
          </Col>*/}


     /*this.menudata = [
      {
        id: 1,
        name: "CMS2018_0050",
        query: [
          "POPULATION: CMS2018_0050: D1",
          "POPULATION: CMS2018_0050: C1",
          "POPULATION: CMS2018_0050: B1",
          "POPULATION: CMS2018_0050: A1",
          "CMS2018_0050: REFERRAL_PROC: D1",
          "CMS2018_0050: REFERRAL_PROC: A1",
          "CMS2018_0050: CONSULTANT_REPORT: E2"
        ]
      },
      {
        id: 2,
        name: "CMS2018_0065",
        query: [
          "POPULATION: CMS2018_0065: D1",
          "POPULATION: CMS2018_0065: C1",
          "POPULATION: CMS2018_0065: B1",
          "POPULATION: CMS2018_0065: A1",
          "CMS2018_0065: SYSTOLIC_BP: E2",
          "CMS2018_0065: RENAL_PROB: H2",
          "CMS2018_0065: RENAL_PROB: G2",
          "CMS2018_0065: RENAL_PROB: F2",
          "CMS2018_0065: PREGNANCY_PROB: H2",
          "CMS2018_0065: PREGNANCY_PROB: G2",
          "CMS2018_0065: PREGNANCY_PROB: F2",
          "CMS2018_0065: HYPERTENTION: H1",
          "CMS2018_0065: HYPERTENTION: G1",
          "CMS2018_0065: HYPERTENTION: F1",
          "CMS2018_0065: HOSPICE_CARE_AMB: E3",
          "CMS2018_0065: HOSPICE_CARE_AMB: D3",
          "CMS2018_0065: HOSPICE_CARE_AMB: D2",
          "CMS2018_0065: HOSPICE_CARE_AMB: A2",
          "CMS2018_0065: DISCH_HOME_HOSPIC_CARE: R1",
          "CMS2018_0065: DIALYSIS_PROC: D3",
          "CMS2018_0065: DIALYSIS_PROC: C3",
          "CMS2018_0065: DIALYSIS_PROC: B3",
          "CMS2018_0065: DIALYSIS_PROC: A3"
        ]
      },
      {
        id: 3,
        name: "CMS2018_0075",
        query: [
          "POPULATION: CMS2018_0075: D1",
          "POPULATION: CMS2018_0075: C1",
          "POPULATION: CMS2018_0075: B1",
          "POPULATION: CMS2018_0075: A1",
          "CMS2018_0075: HOSPICE_CARE_AMB: E1",
          "CMS2018_0075: HOSPICE_CARE_AMB: D2",
          "CMS2018_0075: HOSPICE_CARE_AMB: D1",
          "CMS2018_0075: HOSPICE_CARE_AMB: A1",
          "CMS2018_0075: FLUORIDE_VARNISH_PROC: E2",
          "CMS2018_0075: FLUORIDE_VARNISH_PROC: D2",
          "CMS2018_0075: FLUORIDE_VARNISH_PROC: C2",
          "CMS2018_0075: FLUORIDE_VARNISH_PROC: B2",
          "CMS2018_0075: FLUORIDE_VARNISH_PROC: A2",
          "CMS2018_0075: DISCH_HOME_HOSPIC_CARE: R1",
          "CMS2018_0075: DENTAL_CARIES: H1",
          "CMS2018_0075: DENTAL_CARIES: G1",
          "CMS2018_0075: DENTAL_CARIES: F1"
        ]
      }
    ]; 
    
    
    dataInBytes = json.dumps(request.data)
        stream = io.BytesIO(str.encode(dataInBytes))
        data = JSONParser().parse(stream)
        serializer = AgeSerializer(data=data)
        if serializer.is_valid():
            age = serializer.save()