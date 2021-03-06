const DataTable = () => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Date</th>
            <th>Vendor</th>
            <th>Visited customers</th>
            <th>Deals</th>
            <th>Total value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>22/04/2021</td>
            <td>Charles Babbage</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr>
          <tr>
            <td>22/04/2021</td>
            <td>Paul Baran</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr><tr>
            <td>22/04/2021</td>
            <td>Linus Torvalds</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr><tr>
            <td>22/04/2021</td>
            <td>James Gosling</td>
            <td>34</td>
            <td>25</td>
            <td>15017.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default DataTable;