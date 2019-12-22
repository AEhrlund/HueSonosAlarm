import pytest
import huesonosalarmsrv
import json

@pytest.fixture
def client():
    with huesonosalarmsrv.app.test_client() as client:
        yield client

def test_setalarm(client):
    time = '10:12'
    fadein = 33
    resp = client.post('/huesonosalarm/setalarm', json = { 'time': time, 'fadein': fadein })
    assert(resp.status_code == 200)
    resp = client.get('/huesonosalarm/getalarm')
    assert(resp.status_code == 200)
    resp_json = json.loads(resp.data)
    assert(resp_json['time'] == time)
    assert(resp_json['fadein'] == fadein)

def test_cancelalarm(client):
    time = '10:12'
    fadein = 33
    resp = client.post('/huesonosalarm/setalarm', json={'time': time, 'fadein': fadein})
    resp = client.get('/huesonosalarm/getalarm')
    resp_json = json.loads(resp.data)
    assert(resp_json['time'] == time)
    assert(resp_json['fadein'] == fadein)
    resp = client.delete('/huesonosalarm/cancelalarm')
    assert(resp.status_code == 200)
    resp = client.get('/huesonosalarm/getalarm')
    assert(resp.status_code == 200)
    resp_json = json.loads(resp.data)
    assert(resp_json['time'] == None)
