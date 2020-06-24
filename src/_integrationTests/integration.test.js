import moxios from "moxios";
import { testStore } from "../../Utils";
import { fetchPosts } from "../actions";

describe("fetchPosts actionb", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedStore = [
      {
        title: "Test title 1",
        desc: "Desc",
      },
      {
        title: "Test title 2",
        desc: "Desc",
      },
      {
        title: "Test title 3",
        desc: "Desc",
      },
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: expectedStore,
      });
    });

    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedStore);
    });
  });
});
