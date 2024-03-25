import React from 'react'

const ChildDetail = () => {
  return (
    <>
      <section class="mb-4">
        <div class="card">
          <div class="card-header text-center py-3">
            <h5 class="mb-0 text-center">
              <strong>Child Current Reading</strong>
            </h5>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Child Name</th>
                    <th scope="col">Currently Reading Book</th>
                    <th scope="col">No of Pages Read</th>
                    <th scope="col">Author</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Value</th>
                    <td>Prathibha</td>
                    <td>Sherlock Holmes</td>
                    <td>200</td>
                    <td>Arthur Conan Doyle</td>
                  </tr>
                  <tr>
                    <th scope="row">Absolute change</th>
                    <td>
                      <span class="text-danger">
                        <i class="fas fa-caret-down me-1"></i>
                        <span>-17,654</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>28</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>111</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-success">
                        <i class="fas fa-caret-up me-1"></i>
                        <span>$1,092.72</span>
                      </span>
                    </td>
                    <td>
                      <span class="text-danger">
                        <i class="fas fa-caret-down me-1"></i>
                        <span>$-1.78</span>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildDetail
